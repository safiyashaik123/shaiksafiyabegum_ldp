import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

function ChatScroll() {
  const [messages, setMessages] = useState([
    "Hello",
    "How are you?",
  ]);

  const chatRef = useRef<HTMLDivElement | null>(null);

  

  
//   useEffect(() => {
//     console.log("useEffect Scrolling");

//     if (chatRef.current) {
//       chatRef.current.scrollTop = chatRef.current.scrollHeight;
//     }
//   }, [messages]);
  

  useLayoutEffect(() => {
    console.log("useLayoutEffect Scrolling");

    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  function addMessage() {
    setMessages((prev) => [
      ...prev,
      `New Message ${prev.length + 1}`,
    ]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={addMessage}>
        Add Message
      </button>

      <div
        ref={chatRef}
        style={{
          width: "300px",
          height: "200px",
          overflowY: "auto",
          border: "2px solid black",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default ChatScroll;