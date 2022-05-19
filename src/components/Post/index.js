import profileDefaultPicture from "../../assets/backdrops/profileDefaultPicture.png";
import {
  PostContent,
  PostHeader,
  UserImage,
  UserName,
  PostDescription,
  PostImage,
} from "./style";

export default function Post({ padding }) {
  return (
    <>
      {padding ? (
        <PostContent padding={true ? 1 : undefined}>
          <PostHeader>
            <UserImage
              alt="profileDefaultPicture.svg"
              src={profileDefaultPicture}
            />
            <UserName>Dennis Reynolds</UserName>
          </PostHeader>

          <PostDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            egestas nibh. Maecenas interdum ut leo quis malesuada. Donec sapien
            augue, ornare condimentum vehicula vitae, congue non eros. Mauris
            malesuada leo est, id feugiat diam dignissim vel. Proin eu cursus
            tellus, vitae porta justo.
          </PostDescription>

          <PostImage />
        </PostContent>
      ) : (
        <PostContent padding={false}>
          <PostHeader>
            <UserImage
              alt="profileDefaultPicture.svg"
              src={profileDefaultPicture}
            />
            <UserName>Charlie Kelly</UserName>
          </PostHeader>

          <PostImage />
        </PostContent>
      )}
    </>
  );
}
