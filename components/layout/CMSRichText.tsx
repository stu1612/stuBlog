import { RichText, RichTextProps } from "@graphcms/rich-text-react-renderer";
// import { RichTextContent } from "@graphcms/rich-text-types";

// type CMSRichTextProps = {
//   content: RichTextProps;
// };

export default function CMSRichText({ content }: RichTextProps) {
  const generalStyle = "m-4 mx-auto";
  return (
    <RichText
      content={content}
      renderers={{
        h1: ({ children }) => (
          <h1 className={`h1-bold ${generalStyle}`}>{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className={`h5-bold ${generalStyle}`}>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className={`h5-bold ${generalStyle}`}>{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className={`h5-bold ${generalStyle}`}>{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className={`h5-bold ${generalStyle}`}>{children}</h5>
        ),
        p: ({ children }) => (
          <p className={`p-medium-16 ${generalStyle}`}>{children}</p>
        ),
        li: ({ children }) => (
          <li className={`p-medium-16 p-underline ${generalStyle}`}>
            {children}
          </li>
        ),
        code: ({ children }) => (
          <code className={`bg-red-500 text-green-700`}>{children}</code>
        ),
        code_block: ({ children }) => (
          <pre className={`bg-zinc-300 ${generalStyle}`}>
            <div className="p-5 overflow-auto p-medium-16">{children}</div>
          </pre>
        ),
        img: ({ src, width, height }) => (
          <div className={`${generalStyle}`}>
            <img src={src} width={width} height={height} />
          </div>
        ),
      }}
    />
  );
}
