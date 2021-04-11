import { Icon, Link } from "@material-ui/core";
import YoutubeLogo from "./YoutubeLogo.svg";
import TwitchLogo from "./TwitchLogo.svg";

export const YoutubeIcon = () => (
  <Link href="https://www.youtube.com/channel/UCxsoqxS23DY5C0-51PGYRQg">
    <Icon>
      <img src={YoutubeLogo} height={25} width={24} alt="description" />
    </Icon>
  </Link>
);

export const TwitchIcon = () => (
  <Link href="https://www.twitch.tv/lukeylad">
    <Icon>
      <img src={TwitchLogo} height={25} width={24} alt="description" />
    </Icon>
  </Link>
);
