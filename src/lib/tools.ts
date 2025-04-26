import { TypeIcon, TextIcon, LinkIcon, AlignLeftIcon, RotateCw, Link, Code, Eraser, Filter, ListChecks, Table, FileCode, Regex, Scissors, Hash, BarChart2, Shield, Split, Ruler, Brush } from "lucide-react"

export type Tool = {
    name: string
    slug: string
    description: string
    keywords: string[]
    icon?: React.ComponentType // Add the icon property as optional
}
  
  export const tools: Tool[] = [
    {
      name: "Word Counter",
      slug: "word-counter",
      description: "Counts words, characters, and reading time.",
      icon: TextIcon,
      keywords: ["word count", "character count", "text stats"]
    },
    {
      name: "Case Converter",
      slug: "case-converter",
      description: "Convert text to UPPERCASE, lowercase, Title Case, or Sentence case.",
      icon: TypeIcon,
      keywords: ["case converter", "uppercase", "lowercase", "title case"]
    },
    {
      name: "Remove Line Breaks",
      slug: "remove-line-breaks",
      description: "Clean up text by removing line breaks or converting them to spaces.",
      icon: LinkIcon,
      keywords: ["remove line breaks", "strip newlines", "clean text"]
    },
    {
      name: "Remove Duplicate Lines",
      slug: "remove-duplicate-lines",
      description: "Paste a list and remove all duplicate entries.",
      icon: AlignLeftIcon,
      keywords: ["deduplicate", "remove duplicates", "unique lines"]
    },
    {
      name: "Text Sorter",
      slug: "text-sorter",
      description: "Sort lines of text alphabetically or by length.",
      icon: TextIcon,
      keywords: ["text sorter", "sort lines", "sort alphabetically", "sort by length"]
    },
    {
      name: "Whitespace Cleaner",
      slug: "whitespace-cleaner",
      description: "Remove extra tabs, multiple spaces, and clean up your text formatting.",
      icon: TextIcon,
      keywords: ["whitespace cleaner", "remove tabs", "trim spaces"]
    },
    {
      name: "Reverse Text",
      slug: "reverse-text",
      description: "Reverse the characters or word order of any text input.",
      icon: TextIcon,
      keywords: ["reverse text", "flip text", "reverse characters", "reverse words"]
    },
    {
      name: "Character Counter",
      slug: "character-counter",
      description: "Live character and word counter, with and without spaces.",
      icon: TextIcon,
      keywords: ["character count", "text length", "word count", "count characters"]
    },
    {
      name: "URL Encoder/Decoder",
      slug: "url-encoder-decoder",
      description: "Convert strings to URL-safe format or decode encoded URLs.",
      icon: TextIcon,
      keywords: ["url encoder", "url decoder", "encode uri", "decode uri", "escape url"]
    },
    {
      name: "Text Case Swapper",
      slug: "text-case-swapper",
      description: "Cycle through uppercase, lowercase, title case, and sentence case.",
      icon: RotateCw, // from lucide-react
      keywords: ["toggle case", "swap case", "format text"]
    },
    {
      name: "Slug Generator",
      slug: "slug-generator",
      description: "Convert any string into a URL-safe slug with dashes.",
      icon: Link, // from lucide-react
      keywords: ["slugify", "url-safe", "seo", "convert to slug"]
    },
    {
      name: "JSON Formatter",
      slug: "json-formatter",
      description: "Format or minify raw JSON. Great for devs and API debugging.",
      icon: Code, // from lucide-react
      keywords: ["json", "beautify", "minify", "pretty print", "format json"]
    },
    {
      name: "HTML Stripper",
      slug: "html-stripper",
      description: "Remove all HTML tags and return clean text content.",
      icon: Eraser, // from lucide-react
      keywords: ["html cleanup", "strip tags", "remove html", "plain text"]
    },
    {
      name: "Text Deduplicator",
      slug: "text-deduplicator",
      description: "Removes duplicate words while preserving the original order.",
      icon: Filter, // from lucide-react
      keywords: ["deduplicate", "remove repeated", "unique words"]
    },
    {
      name: "List to CSV",
      slug: "list-to-csv",
      description: "Convert a line-separated list to a comma-separated CSV string.",
      icon: ListChecks, // from lucide-react
      keywords: ["csv", "list", "convert to csv", "text to csv"]
    },
    {
      name: "CSV to Table",
      slug: "csv-to-table",
      description: "Paste CSV text and render it as a clean HTML table.",
      icon: Table, // from lucide-react
      keywords: ["csv", "table", "spreadsheet", "parse", "render"]
    },
    {
      name: "Text to HTML",
      slug: "text-to-html",
      description: "Convert plain text into HTML-safe output with line breaks.",
      icon: FileCode, // from lucide-react
      keywords: ["html escape", "text to html", "safe html", "convert text"]
    },
    {
      name: "Regex Tools",
      slug: "regex-tools",
      description: "Test regex patterns, view matches, and apply replacements.",
      icon: Regex, // from lucide-react
      keywords: ["regex", "pattern matching", "replace", "regexp tester"]
    },
    {
      name: "Text Trimmer",
      slug: "text-trimmer",
      description: "Trim whitespace from entire text, each line, or each word.",
      icon: Scissors, // from lucide-react
      keywords: ["trim", "remove spaces", "clean whitespace", "format"]
    },
    {
      name: "Number Extractor",
      slug: "number-extractor",
      description: "Extract all numbers from any block of text. Optionally export as CSV.",
      icon: Hash, // from lucide-react
      keywords: ["numbers", "extract", "data", "csv", "math", "parse"]
    },
    {
      name: "Word Frequency Counter",
      slug: "word-frequency-counter",
      description: "Count how many times each word appears. Great for SEO and writing analysis.",
      icon: BarChart2, // from lucide-react
      keywords: ["word count", "seo", "writing", "frequency", "analysis"]
    },  
    {
      name: "Text Encoder/Decoder",
      slug: "text-encoder-decoder",
      description: "Convert text to and from Base64, URI component, or HTML entities.",
      icon: Shield, // from lucide-react
      keywords: ["base64", "uri encode", "decode", "html escape", "security"]
    },  
    {
      name: "Line/Word/Char Splitter",
      slug: "text-splitter",
      description: "Split text into lines, words, or characters — one per line.",
      icon: Split, // from lucide-react
      keywords: ["split text", "tokenize", "lines", "words", "characters"]
    },
    {
      name: "String Length Checker",
      slug: "string-length-checker",
      description: "Check the length of each line and highlight ones that exceed a limit.",
      icon: Ruler, // from lucide-react
      keywords: ["character count", "limit checker", "seo", "line length"]
    },
    {
      name: "Symbol Remover",
      slug: "symbol-remover",
      description: "Remove punctuation and symbols from text, with optional safe character exceptions.",
      icon: Brush, // from lucide-react
      keywords: ["clean text", "remove punctuation", "strip symbols", "alphanumeric only"]
    },  
    {
      name: "Text to Markdown",
      slug: "text-to-markdown",
      description: "Convert plain text or formatted content into Markdown.",
      icon: Shield, // if you have one
      keywords: ["clean text", "markdown", "formatting", "convert to markdown"]
    },  
    // Add more...
  ]
  