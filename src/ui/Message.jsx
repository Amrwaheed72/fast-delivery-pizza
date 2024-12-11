function Message({ children }) {
  return (
    <div className="animate-fade-in fixed bottom-16 right-1 rounded-3xl bg-orange-800 px-4 py-2 text-white shadow-lg">
      {children}
    </div>
  );
}

export default Message;
