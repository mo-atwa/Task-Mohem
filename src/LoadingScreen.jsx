import { useState, useEffect, useCallback, useMemo } from "react";

const LoadingScreen = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const texts = useMemo(
    () => ["لكي تبقا منظمًا ومركّزًا احفظ مهامك مع", "Task Mohem"],
    []
  );

  const handleTyping = useCallback(() => {
    const current = texts[textIndex];

    if (!isDeleting) {
      if (charIndex === current.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000); // Pause before deleting 2500
        return;
      }
      setCurrentText(current.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    } else {
      if (charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      setCurrentText(current.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    }
  }, [charIndex, isDeleting, textIndex, texts]);

  useEffect(() => {
    if (isPaused) return;

    const typingSpeed = isDeleting ? 20 : 50; // Speed up deleting
    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [handleTyping, isDeleting, isPaused]);

  return (
    <div className="loading-screen">
       <h1 className="typing-text" style={{ color: "white" }}>
       {currentText}
        </h1>
      
    </div>
  );
};

export default LoadingScreen;
