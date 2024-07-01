function HighlightedText({ text,width }) {
  return (
    <span className={`font-bold text-4xl bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent `}>
      {" "}
      {text}
    </span>
  );
}

export default HighlightedText;
