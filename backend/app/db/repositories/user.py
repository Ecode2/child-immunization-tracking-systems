from motor.motor_asyncio import AsyncIOMotorDatabase
from db.models.user import User

class UserRepository:
    def __init__(self, database: AsyncIOMotorDatabase):
        self.database = database

    async def create_user(self, user: User):
        await self.database["users"].insert_one(user.dict())

    async def get_user_by_email(self, email: str):
        return await self.database["users"].find_one({"email": email})

    async def get_user_by_id(self, user_id: str):
        return await self.database["users"].find_one({"_id": user_id})

    async def update_user_children(self, user_id: str, child_list: list):
        await self.database["users"].update_one({"_id": user_id}, {"$set": {"children": child_list}})