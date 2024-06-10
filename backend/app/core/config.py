from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    DEFAULT_DATABASE: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # MAIL_USERNAME: str
    # MAIL_PASSWORD: str
    # MAIL_FROM: str
    # MAIL_PORT: int
    # MAIL_SERVER: str
    # MAIL_TLS: bool
    # MAIL_SSL: bool
    # FRONTEND_URL: str

    class Config:
        env_file = "/home/halleluyah/Documents/child-immunization-tracking-system/backend/app/.env"

settings = Settings()