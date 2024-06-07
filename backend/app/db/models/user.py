from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# Model to accept user input during registration
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    first_name: str
    middle_name: Optional[str] = None
    last_name: str
    date_of_birth: datetime

# Model to represent the user stored in the database
class User(BaseModel):
    email: EmailStr
    hashed_password: str
    first_name: str
    middle_name: Optional[str] = None
    last_name: str
    date_of_birth: datetime
    is_active: bool = True
    is_superuser: bool = False
    children: Optional[List[str]] = []
    created_at: datetime
    updated_at: datetime
