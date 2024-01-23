"use client";

import { Button } from "@/components/ui/button";

export default function WebShare({ data }: any) {
  // const onHandleShare = async () => {
  //   try {
  //     if (navigator.share) {
  //       await navigator.share({
  //         title: data?.post?.title,
  //         text: data?.post?.excerpt,
  //         url: typeof window !== "undefined" ? window.location.href : "",
  //       });

  //       console.log("Successfully shared!");
  //     }
  //   } catch (err) {
  //     console.error("Error sharing:", err);
  //   }
  // };
  const onHandleShare = async () => {
    try {
      if (navigator.share) {
        // const imageUrl = data?.post?.image?.url;
        const imageUrl = "https://picsum.photos/200";

        if (imageUrl) {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const file = new File([blob], "image.jpg", { type: "image/jpeg" });

          await navigator.share({
            title: data?.post?.title,
            text: data?.post?.excerpt,
            url: typeof window !== "undefined" ? window.location.href : "",
            files: [file],
          });

          console.log("Successfully shared!");
        } else {
          console.error("Image URL not available");
        }
      } else {
        console.error("Web Share API not supported");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return <Button onClick={onHandleShare}>Share</Button>;
}
