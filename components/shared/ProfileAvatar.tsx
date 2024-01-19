import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileAvatar() {
  return (
    <Avatar>
      <AvatarImage src="/images/stu_1.jpeg" />
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  );
}
