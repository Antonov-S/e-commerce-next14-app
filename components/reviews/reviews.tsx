import { desc, eq } from "drizzle-orm";

import { db } from "@/server";
import Review from "./review";
import ReviewsForms from "./reviews-form";
import { reviews } from "@/server/schema";
import ReviewChart from "./review-chart";

export default async function Reviews({ productID }: { productID: number }) {
  const data = await db.query.reviews.findMany({
    with: { user: true },
    where: eq(reviews.productID, productID),
    orderBy: [desc(reviews.created)]
  });

  return (
    <section className="py-4">
      <div className="flex gap-2 ld:gap-12 justify-stretch ld:flex-row flex-col">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>
          <ReviewsForms />
          <Review reviews={data} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <ReviewChart reviews={data} />
        </div>
      </div>
    </section>
  );
}
