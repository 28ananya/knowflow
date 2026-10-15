from fastapi import APIRouter, Depends, HTTPException, status

from app.core.security import create_access_token, get_current_user, hash_password, users_db
from app.schemas.auth import TokenResponse, UserRegister

router = APIRouter(prefix="/api/v1/auth", tags=["auth"])


@router.post("/register", response_model=TokenResponse)
async def register_user(payload: UserRegister) -> TokenResponse:
    user_email = payload.email.lower()
    if user_email in users_db:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="User already exists")

    users_db[user_email] = {
        "email": user_email,
        "password": hash_password(payload.password),
    }

    token = create_access_token(user_email)
    return TokenResponse(access_token=token, user={"email": user_email})


@router.post("/login", response_model=TokenResponse)
async def login_user(payload: UserRegister) -> TokenResponse:
    user_email = payload.email.lower()
    user = users_db.get(user_email)
    if not user or user["password"] != hash_password(payload.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_access_token(user_email)
    return TokenResponse(access_token=token, user={"email": user_email})


@router.get("/me")
async def get_me(current_user: dict[str, str] = Depends(get_current_user)) -> dict[str, str]:
    return current_user
