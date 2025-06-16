export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
    {/* setting components types dynamically */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}