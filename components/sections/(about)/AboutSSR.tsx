import { FetchAboutData } from "@/lib/fetchAboutData";
import ImageCarouselClient from "@/components/(image-carousel)/ImageCarouselClient";

interface AboutData {
  _id: string;
  summary: string;
  images: { url: string }[];
}

export default async function AboutDetails() {
  const aboutDetails = await FetchAboutData();

  if (!aboutDetails) {
    return (
      <div>
        <h1>About Me</h1>
        <p>Loading...</p>
      </div>
    );
  }

  const serializedData: AboutData[] = aboutDetails.map((detail: any) => {
    return {
      ...detail,
      _id: detail._id.toString(),
    };
  });

  return (
    <div className="w-5/6 mx-auto" id="AboutMe">
      <h1 className="text-4xl text-center font-serif py-2 border-b-2 border-light">
        About Me
      </h1>
      <p className="text-center my-3 md:text-lg">{serializedData[0].summary}</p>

      <ImageCarouselClient images={serializedData[0].images} />
    </div>
  );
}
