import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";

const SuppliesCard = ({ ...supplies }) => {
  return (
    <motion.div
      className="mt-10 "
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <Card className="relative h-full mx-auto bg-violet-100 max-w-96">
        <img
          src={supplies.image}
          alt=""
          className="w-full mx-auto max-w-[340px] rounded-md"
        />
        <CardHeader>
          <CardTitle>
            <h2>Title: {supplies.title}</h2>
          </CardTitle>
          <CardDescription>
            <p className="mt-4">Category: {supplies.category}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-8">
          <p>Amount: {supplies.amount}</p>
        </CardContent>
        <Link to={`/${supplies._id}`} state={supplies}>
          <Button
            className="absolute bottom-0 w-full max-w-96 hover:bg-slate-300"
            variant="secondary"
          >
            View Details
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
};

export default SuppliesCard;
