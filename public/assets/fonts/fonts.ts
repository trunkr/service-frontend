export const TEXT_STYLE_NAME = {
  Title1: 'Title1',
  Title2: 'Title2',
  Title3: 'Title3',
  Title4: 'Title4',
  Title5: 'Title5',
  Title6: 'Title6',
  Title7: 'Title7',
  Body1B: 'Body1B',
  Body1M: 'Body1M',
  Body2B: 'Body2B',
  Body2SB: 'Body2SB',
  Body2M: 'Body2M',
  Body3M: 'Body3M',
  Body3B: 'Body3B',
  Body4B: 'Body4B',
  Body4SB: 'Body4SB',
  Body4M: 'Body4M',
  Label1B: 'Label1B',
  Label1SB: 'Label1SB',
  Label1M: 'Label1M',
  Label2B: 'Label2B',
  Label2SB: 'Label2SB',
  Label2M: 'Label2M',
  Label3B: 'Label3B',
  Label3M: 'Label3M',
  Label4B: 'Label4B',
  Label4SB: 'Label4SB',
  Label4M: 'Label4M',
  Label5B: 'Label5B',
  Label5M: 'Label5M',
  Label6B: 'Label6B',
  Label6M: 'Label6M',
  Label7B: 'Label7B',
  Label7M: 'Label7M',
} as const;

export type TextStyleName = (typeof TEXT_STYLE_NAME)[keyof typeof TEXT_STYLE_NAME];

export type FontFamilyName = 'Poppins' | 'Pretendard';

interface TextStyle {
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
  letterSpacing?: string;
}

export const TEXT_STYLES: Record<TextStyleName, TextStyle> = {
  [TEXT_STYLE_NAME.Title1]: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: '46.8px',
  },
  [TEXT_STYLE_NAME.Title2]: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: '41.6px',
  },
  [TEXT_STYLE_NAME.Title3]: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: '39px',
  },
  [TEXT_STYLE_NAME.Title4]: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: '36.4px',
  },
  [TEXT_STYLE_NAME.Title5]: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '31.2px',
  },
  [TEXT_STYLE_NAME.Title6]: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '26px',
  },
  [TEXT_STYLE_NAME.Title7]: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '25.2px',
  },
  [TEXT_STYLE_NAME.Body1B]: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '30.6px',
  },
  [TEXT_STYLE_NAME.Body1M]: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '30.6px',
  },
  [TEXT_STYLE_NAME.Body2B]: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '27.2px',
  },
  [TEXT_STYLE_NAME.Body2SB]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '27.2px',
  },
  [TEXT_STYLE_NAME.Body2M]: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '27.2px',
  },
  [TEXT_STYLE_NAME.Body3B]: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: '25.5px',
  },
  [TEXT_STYLE_NAME.Body3M]: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '25.5px',
  },
  [TEXT_STYLE_NAME.Body4B]: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '23.8px',
  },
  [TEXT_STYLE_NAME.Body4B]: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '23.8px',
  },
  [TEXT_STYLE_NAME.Body4SB]: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '23.8px',
  },
  [TEXT_STYLE_NAME.Body4M]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '23.8px',
  },
  [TEXT_STYLE_NAME.Label1B]: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '21.6px',
  },
  [TEXT_STYLE_NAME.Label1SB]: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '21.6px',
  },
  [TEXT_STYLE_NAME.Label1M]: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '21.6px',
  },
  [TEXT_STYLE_NAME.Label2B]: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '19.2px',
  },
  [TEXT_STYLE_NAME.Label2SB]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '19.2px',
  },
  [TEXT_STYLE_NAME.Label2M]: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '19.2px',
  },
  [TEXT_STYLE_NAME.Label3B]: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: '18px',
  },
  [TEXT_STYLE_NAME.Label3M]: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '18px',
  },
  [TEXT_STYLE_NAME.Label4B]: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '16.8px',
  },
  [TEXT_STYLE_NAME.Label4SB]: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '16.8px',
  },
  [TEXT_STYLE_NAME.Label4M]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '16.8px',
  },
  [TEXT_STYLE_NAME.Label5B]: {
    fontSize: 13,
    fontWeight: 700,
    lineHeight: '15.6px',
  },
  [TEXT_STYLE_NAME.Label5M]: {
    fontSize: 13,
    fontWeight: 500,
    lineHeight: '15.6px',
  },
  [TEXT_STYLE_NAME.Label6B]: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: '14.4px',
  },
  [TEXT_STYLE_NAME.Label6M]: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '14.4px',
  },
  [TEXT_STYLE_NAME.Label7B]: {
    fontSize: 11,
    fontWeight: 700,
    lineHeight: '13.2px',
  },
  [TEXT_STYLE_NAME.Label7M]: {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: '13.2px',
  },
};
