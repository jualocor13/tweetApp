interface Line {
    id: string;
    startTime: string;
    startSeconds: number;
    endTime: string;
    endSeconds: number;
    text: string;
}
declare class Parser {
    seperator: string;
    timestampToSeconds(srtTimestamp: string): number;
    correctFormat(time: string): string;
    private fixed_str_digit;
    private tryComma;
    private tryDot;
    fromSrt(data: string): any[];
    toSrt(data: Array<Line>): string;
}
export default Parser;
export { Line, Parser };
