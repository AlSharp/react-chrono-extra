import { Theme } from '@models/Theme';
import { TimelineProps } from '@models/TimelineModel';
type ContentT = Pick<TimelineProps, 'theme' | 'slideShow' | 'mode' | 'borderLessCards'>;
export declare const TimelineItemContentWrapper: import("styled-components").StyledComponent<"section", any, {
    $active?: boolean;
    $borderLessCards?: TimelineProps['borderLessCards'];
    $branchDir?: string;
    $isNested?: boolean;
    $maxWidth?: number;
    $minHeight?: number;
    $noMedia?: boolean;
    $slideShow?: TimelineProps['slideShow'];
    $slideShowActive?: boolean;
    $slideShowType?: TimelineProps['slideShowType'];
    $textOverlay?: boolean;
} & ContentT, never>;
export declare const TimelineCardHeader: import("styled-components").StyledComponent<"header", any, {}, never>;
export declare const CardSubTitle: import("styled-components").StyledComponent<"h2", any, {
    $fontSize?: string;
    $padding?: boolean;
    dir?: string;
    theme?: Theme;
}, never>;
export declare const CardTitle: import("styled-components").StyledComponent<"h1", any, {
    $fontSize: string;
    $padding?: boolean;
    dir?: string;
    theme: Theme;
}, never>;
export declare const CardTitleAnchor: import("styled-components").StyledComponent<"a", any, {}, never>;
export declare const TimelineContentDetails: import("styled-components").StyledComponent<"p", any, {
    theme?: Theme;
}, never>;
export declare const TimelineSubContent: import("styled-components").StyledComponent<"span", any, {
    fontSize?: string;
    theme?: Theme;
}, never>;
export declare const TimelineContentDetailsWrapper: import("styled-components").StyledComponent<"div", any, {
    $borderLess?: boolean;
    $cardHeight?: number | null;
    $contentHeight?: number;
    $customContent?: boolean;
    $gradientColor?: string | null;
    $showMore?: boolean;
    $textOverlay?: boolean;
    $useReadMore?: boolean;
    branchDir?: string;
    height?: number;
    theme?: Theme;
}, never>;
export declare const ShowMore: import("styled-components").StyledComponent<"button", any, {
    show?: 'true' | 'false';
    theme?: Theme;
}, never>;
export declare const SlideShowProgressBar: import("styled-components").StyledComponent<"span", any, {
    $color?: string;
    $duration?: number;
    $paused?: boolean;
    $resuming?: boolean;
    $startWidth?: number;
}, never>;
export declare const ChevronIconWrapper: import("styled-components").StyledComponent<"span", any, {
    collapsed?: 'true' | 'false';
}, never>;
export declare const TriangleIconWrapper: import("styled-components").StyledComponent<"span", any, {
    dir?: string;
    offset?: number;
    theme?: Theme;
}, never>;
export {};
