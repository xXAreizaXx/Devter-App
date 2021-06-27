import { colors } from "../../styles/theme";

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            align-items: center;
            background-color: ${colors.black};
            border-radius: 9999px;
            border: 0;
            color: ${colors.white};
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-weight: 10px;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
          }

          button > :global(svg) {
            margin-right: 10px;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
}
