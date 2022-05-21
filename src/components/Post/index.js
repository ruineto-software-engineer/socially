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
        {isImage(url) ? (
          <img alt="postImage*" src={url} />
        ) : (
          <a target="_blank" href={url} rel="noreferrer">
            Shared Link
          </a>
        )}
      </PostImage>
    </PostContent>
  );
}

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
