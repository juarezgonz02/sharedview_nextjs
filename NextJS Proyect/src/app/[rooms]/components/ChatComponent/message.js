
const MessageComponent = ({ isMe, time, messageText, messageTitle }) =>
{
    return (
        <div className="flex flex-col gap-1">
            {
                isMe && <span className="font-bold text-sm">{`${time} - Yo: `}</span>
            }

            {
                !isMe && <span className="font-bold text-sm">{`${time} ${messageTitle}: `}</span>
            }

            <p className="text-sm">{messageText}</p>
        </div>
    )
  }

export default MessageComponent