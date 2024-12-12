import Code from '../components/Code';

export function parseCodeTags(text) {
  const codeRegex = /<Code>(.*?)<\/Code>/g;
  const parts = [];
  let startIndex = 0;

  text.replace(codeRegex, (match, code, offset) => {
    parts.push(text.slice(startIndex, offset));
    parts.push(
      <Code inline key={offset}>
        {code}
      </Code>
    );
    startIndex = offset + match.length;
  });

  parts.push(text.slice(startIndex));

  return parts;
}

export function parseText(description) {
  if (!description) return null;
  return description
    .split('\n\n')
    .map((para, i) => <p key={i}>{parseCodeTags(para)}</p>);
}
