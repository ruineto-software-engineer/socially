import profileDefaultPicture from "../../assets/backdrops/profileDefaultPicture.png";
import {
  PostContent,
  PostHeader,
  UserImage,
  UserName,
  PostDescription,
  PostImage,
} from "./style";

export default function Post({ description, url, name }) {
  const isNoneUrl = url.indexOf("socially") === -1;
  const isNoneDescription = description === "N/A";

  return (
    <PostContent url={isNoneUrl} description={isNoneDescription}>
      <PostHeader>
        <UserImage
          alt="profileDefaultPicture.svg"
          src={profileDefaultPicture}
        />
        <UserName>{name}</UserName>
      </PostHeader>

      <PostDescription description={isNoneDescription}>
        {description}
      </PostDescription>

      <PostImage url={isNoneUrl}>
        <img alt="postImage*" src={url} />
      </PostImage>
    </PostContent>
  );
}
