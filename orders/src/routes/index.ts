import  express, { Request, Response }  from "express";
import { requireAuth } from "@vkticketing1/common";
import { Order } from "../models/order";

const router = express.Router();

router.get('/api/orders', requireAuth, async (req: Request, res: Response) => {
    console.log("AAAAA", req.currentUser)
    const orders = await Order.find({
        userId: req.currentUser!.id
    }).populate('ticket');

    res.send(orders);
});

export { router as indexOrderRouter };