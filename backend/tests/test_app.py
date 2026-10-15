from app.main import app


def test_app_metadata() -> None:
    assert app.title == "KnowFlow API"
    assert app.version == "0.1.0"
