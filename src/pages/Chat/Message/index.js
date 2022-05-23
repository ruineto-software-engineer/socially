import { MessageContainer, MessageContent, MessageControl } from "./style";

export default function Message({ message, recipient }) {
  return (
    <MessageContainer recipient={recipient}>
      <MessageContent recipient={recipient}>
        <MessageControl>{message}</MessageControl>
      </MessageContent>
    </MessageContainer>
  );
}
