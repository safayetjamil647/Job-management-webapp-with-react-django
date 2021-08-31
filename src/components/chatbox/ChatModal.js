import "./Modal.css";
const ChatModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal block" : "modal hidden";

  return (
    <div className={showHideClassName}>
      <section className="fixed modal-main border-2  rounded-lg border-blue-600 w-3/12 bg-blue-700 bottom-40 right-5">
        <div className="flex flex-wrap ">
          <div className="w-6/12 p-2">
            <p className="text-white">Chat UI</p>
          </div>
          <div className="w-6/12 p-2 flex justify-end">
            {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="h-48 overflow-y-auto bg-white px-4 py-2 space-y-2">
          <p className="p-2 bg-gray-200 rounded-lg">Hello How are you</p>
          <p className="p-2 bg-red-200 rounded-lg">I am fine you?</p>
          <p className="p-2 bg-gray-200 rounded-lg">Hello How are you</p>
          <p className="p-2 bg-red-200 rounded-lg">I am fine you?</p>
          <p className="p-2 bg-gray-200 rounded-lg">Hello How are you</p>
          <p className="p-2 bg-red-200 rounded-lg">I am fine you?</p>
        </div>
        <form action="">
          <input
            className="w-full border-2 border-gray-400 rounded-lg p-2 my-1"
            placeholder="Write something here"
            type="text"
          />
        </form>
      </section>
    </div>
  );
};

export default ChatModal;
