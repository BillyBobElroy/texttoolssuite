import WordCounter from "@/components/tools/WordCounter"
import CaseConverter from "@/components/tools/CaseConverter"
import RemoveLineBreaks from "@/components/tools/RemoveLineBreaks"
import RemoveDuplicateLines from "@/components/tools/RemoveDuplicateLines"
import TextSorter from "@/components/tools/TextSorter"
import WhitespaceCleaner from "@/components/tools/WhitespaceCleaner"
import ReverseText from "@/components/tools/ReverseText"
import CharacterCounter from "@/components/tools/CharacterCounter"
import UrlEncoderDecoder from "@/components/tools/UrlEncoderDecoder"
import TextCaseSwapper from "@/components/tools/TextCaseSwapper"
import SlugGenerator from "@/components/tools/SlugGenerator"
import JsonFormatter from "@/components/tools/JsonFormatter"
import HtmlStripper from "@/components/tools/HtmlStripper"
import TextDeduplicator from "@/components/tools/TextDeduplicator"
import ListToCsv from "@/components/tools/ListToCsv"
import CsvToTable from "@/components/tools/CsvToTable"
import TextToHtml from "@/components/tools/TextToHtml"
import RegexTools from "@/components/tools/RegexTools"
import TextTrimmer from "@/components/tools/TextTrimmer"
import NumberExtractor from "@/components/tools/NumberExtractor"
import WordFrequencyCounter from "@/components/tools/WordFrequencyCounter"
import TextEncoderDecoder from "@/components/tools/TextEncoderDecoder"
import TextSplitter from "@/components/tools/TextSplitter"
import StringLengthChecker from "@/components/tools/StringLengthChecker"
import SymbolRemover from "@/components/tools/SymbolRemover"
import TextToMarkdown from "@/components/tools/TextToMarkdown"

export const toolComponents: Record<string, React.ComponentType> = {
  "word-counter": WordCounter,
  "case-converter": CaseConverter,
  "remove-line-breaks": RemoveLineBreaks,
  "remove-duplicate-lines": RemoveDuplicateLines,
  "text-sorter": TextSorter,
  "whitespace-cleaner": WhitespaceCleaner,
  "reverse-text": ReverseText,
  "character-counter": CharacterCounter,
  "url-encoder-decoder": UrlEncoderDecoder,
  "text-case-swapper": TextCaseSwapper,
  "slug-generator": SlugGenerator,
  "json-formatter": JsonFormatter,
  "html-stripper": HtmlStripper,
  "text-deduplicator": TextDeduplicator,
  "list-to-csv": ListToCsv,
  "csv-to-table": CsvToTable,
  "text-to-html": TextToHtml,
  "regex-tools": RegexTools,
  "text-trimmer": TextTrimmer,
  "number-extractor": NumberExtractor,
  "word-frequency-counter": WordFrequencyCounter,
  "text-encoder-decoder": TextEncoderDecoder,
  "text-splitter": TextSplitter,
  "string-length-checker": StringLengthChecker,
  "symbol-remover": SymbolRemover,
  "text-to-markdown": TextToMarkdown,
}
