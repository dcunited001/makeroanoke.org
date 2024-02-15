import { getCollection } from "astro:content";

export async function loadAndFormatCollection(name) {
  const coll = await getCollection(name);

  coll.forEach((c) => {
    const date = c.data.pubDate;
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = (date.getDay() + 1).toString().padStart(2, "0");

    c.year = year;
    c.month = month;
    c.day = day;
  });

  return coll;
}
