    import Message from "../modal/Message.js";
    import Conversation from '../modal/Conversation.js';
    import axios from 'axios';


    export const newMessage = async (request, response) => {
        const newMessage = new Message(request.body);
        try {
            await newMessage.save();
            await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
            if(request.body.receiverId == '100667486173486589121'){
                const { data } = await axios.post('http://localhost:8000/call-python-function', { text: request.body.text });
                let message_gpt = data.result;
                
                const gptMessage = new Message({
                    senderId: 'GPT-3.5', 
                    text: message_gpt,
                    conversationId: request.body.conversationId
                });

                // Save the GPT message to the database
                await gptMessage.save();
            }
            response.status(200).json("Message has been sent successfully");
        } catch (error) {
            response.status(500).json(error);
        }

    }

    export const getMessage = async (request, response) => {
        try {
            const messages = await Message.find({ conversationId: request.params.id });
            response.status(200).json(messages);
        } catch (error) {
            response.status(500).json(error);
        }

    }

