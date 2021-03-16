import express from "express";
import { addBorrowing, viewAllBorrowings, viewBorrowing, updateBorrowing, deleteBorrowing } from '../controllers/borrowingController.js'

const borrowingRouter = express.Router();

//Add a Borrowing
membersRouter.post("/", addBorrowing);

//View a member members/:id
membersRouter.get("/:id", viewBorrowing);

//View all members members/
membersRouter.get("/", viewAllBorrowings);

//Update member record members/
membersRouter.put("/", updateBorrowing);

//Delete a member members/:id
membersRouter.delete("/:id", deleteBorrowing);

export default borrowingRouter;






