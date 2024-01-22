"use client";

import { Button } from "@/components/ui/button";

export default function WebShare({ data }: any) {
  const onHandleShare = async () => {
    try {
      if (navigator.share) {
        const imageUrl = data?.post?.image?.url;

        if (imageUrl) {
          const response = await fetch(imageUrl);
          const blob = await response.blob();

          // Extract the file extension from the image URL - test whether linkedn images load better when sharing
          const fileExtension = imageUrl.substring(
            imageUrl.lastIndexOf(".") + 1
          );
          const fileName = `image.${fileExtension}`;

          // const file = new File([blob], "image.jpg", { type: "image/jpeg" });
          const file = new File([blob], fileName, {
            type: `image/${fileExtension}`,
          });

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
