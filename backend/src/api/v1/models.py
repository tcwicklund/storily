from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship
from pydantic import BaseModel

from ...database import Base

class User(BaseModel):
    id: int
    username: str
    email: str
    password: str
    is_active: bool
    is_superuser: bool


