import { Config, Data } from "@measured/puck";
import { ButtonGroup, ButtonGroupProps } from "./blocks/ButtonGroup";
import { Hero, HeroProps } from "./blocks/Hero";
import { Heading, HeadingProps } from "./blocks/Heading";
import { FeatureList, FeatureListProps } from "./blocks/FeatureList";
import { Logos, LogosProps } from "./blocks/Logos";
import { Stats, StatsProps } from "./blocks/Stats";
import { Text, TextProps } from "./blocks/Text";
import { VerticalSpace, VerticalSpaceProps } from "./blocks/VerticalSpace";

import Root, { RootProps } from "./root";

type Props = {
  ButtonGroup: ButtonGroupProps;
  Hero: HeroProps;
  Heading: HeadingProps;
  FeatureList: FeatureListProps;
  Logos: LogosProps;
  Stats: StatsProps;
  Text: TextProps;
  VerticalSpace: VerticalSpaceProps;
};

// We avoid the name config as next gets confused
export const conf: Config<Props, RootProps> = {
  root: {
    render: Root,
  },
  components: {
    ButtonGroup,
    Hero,
    Heading,
    FeatureList,
    Logos,
    Stats,
    Text,
    VerticalSpace,
  },
};

export const initialData: Record<string, Data> = {
  "/": {
    content: [
      {
        type: "Hero",
        props: {
          title: "구름처럼 다양한 글, 글루드",
          description:
            "",
          buttons: [
            {
              label: "Download",
              href: "https://glud.sspzoa.io",
              variant: "secondary",
            },
          ],
          id: "Hero-1687283596554",
          height: "",
          imageUrl:
            "https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
          imageMode: "background",
          padding: "128px",
          align: "center",
        },
      },
      {
        type: "VerticalSpace",
        props: { size: "96px", id: "VerticalSpace-1687298109536" },
      },
      {
        type: "Heading",
        props: {
          align: "center",
          level: "2",
          text: "글루드의 다양한 기능",
          padding: "0px",
          size: "xxl",
          id: "Heading-1687297593514",
        },
      },
      {
        type: "VerticalSpace",
        props: { size: "8px", id: "VerticalSpace-1687284122744" },
      },
      {
        type: "VerticalSpace",
        props: { size: "40px", id: "VerticalSpace-1687296179388" },
      },
      {
        type: "FeatureList",
        props: {
          items: [
            {
              title: "음성 지원 서비스",
              description:
                "글루드는 음성 지원 서비스를 통해 사용자의 편리성을 한층 더 증가시켰습니다.",
              icon: "Mic",
            },
            {
              title: "다양한 글쓰기 지원",
              description:
                "글루드는 chatGPT 3.5를 사용한 글쓰기를 지원합니다. 키워드를 작성하고 글쓰기 버튼만 누르면 높은 완성도의 글을 작성합니다.",
              icon: "AlignLeft",
            },
            {
              title: "간편한 저장",
              description:
                "복사 버튼을 누르고 클립보드에 글을 저장하거나, 저장 버튼을 눌러 쉽고 간편하게 Docx파일로 저장할 수 있습니다.",
              icon: "Archive",
            },
          ],
          id: "FeatureList-1687287577500",
          mode: "flat",
        },
      },
      {
        type: "VerticalSpace",
        props: { size: "96px", id: "VerticalSpace-1687287070296" },
      },
      {
        type: "VerticalSpace",
        props: { size: "96px", id: "VerticalSpace-1687298110602" },
      },
      {
        type: "Hero",
        props: {
          title: "편리한 화면구성",
          description:
            "보기 쉬운 메인화면으로 더 편하고 쉽게 글을 작성하세요.",
          id: "Hero-1687219384702",
          height: "",
          imageUrl:
            "https://ifh.cc/g/LL84Rz.jpg",
          imageMode: "inline",
          padding: "128px",
          align: "left",
        },
      },
    ],
    root: { title: "GLUD_Ex" },
  },
  "/GLUD": {  
    content: [],
    root: { title: "GLUD" },
  },
};

export default conf;
