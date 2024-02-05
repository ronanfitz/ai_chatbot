import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";

const chatMessages = [
  {
    role: "user",
    content: "Hello, AI assistant! Can you tell me the weather today?",
  },
  {
    role: "assistant",
    content: "Hello! Sure, I can help with that. May I know your location?",
  },
  { role: "user", content: "I am in New York City." },
  {
    role: "assistant",
    content:
      "Great! The current weather in New York City is 72°F with partly cloudy skies.",
  },
  {
    role: "user",
    content:
      "Thanks for the information! What about the forecast for tomorrow?",
  },
  {
    role: "assistant",
    content:
      "Tomorrow is expected to be slightly cooler with a high of 65°F and a chance of rain in the afternoon.",
  },
  { role: "user", content: "Perfect! Anything else I should be aware of?" },
  {
    role: "assistant",
    content:
      "No specific alerts at the moment, but I'll keep you updated if there are any changes in the weather conditions.",
  },
  { role: "user", content: "Thanks for your help! Have a great day." },
  {
    role: "assistant",
    content:
      "You're welcome! If you have any more questions or need assistance, feel free to ask. Have a wonderful day!",
  },
];

const Chat = () => {
  const auth = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.includes(" ")
              ? auth?.user?.name?.split(" ")[1][0]
              : ""}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "Roboto Slab" }}>
            You are talking to a chatBOT
          </Typography>
          <Typography
            sx={{ mx: "auto", fontFamily: "Roboto Slab", my: 4, p: 3 }}
          >
            You can ask some questions related to Knowledge, Business, Advice,
            Education, etc. But avoid sharing personal information.
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            marginRight: "auto",
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton sx={{ ml: "auto", color: "white" }}>
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
