export const shuffle = <T>(items: T[]) => {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};

export const sample = <T>(items: T[]) =>
  items[Math.trunc(Math.random() * items.length)];

export interface Letter {
  name: string;
  latin: string;
  ipa: string;
}

export const georgian: Letter[] = [
  { name: "ა", latin: "a", ipa: "/ɑ/" },
  { name: "ბ", latin: "b", ipa: "/b/" },
  { name: "გ", latin: "g", ipa: "/ɡ/" },
  { name: "დ", latin: "d", ipa: "/d/" },
  { name: "ე", latin: "e", ipa: "/ɛ/" },
  { name: "ვ", latin: "v", ipa: "/v/" },
  { name: "ზ", latin: "z", ipa: "/z/" },
  { name: "თ", latin: "t", ipa: "/tʰ/" },
  { name: "ი", latin: "i", ipa: "/i/" },
  { name: "კ", latin: "k’", ipa: "/k’/" },
  { name: "ლ", latin: "l", ipa: "/l/" },
  { name: "მ", latin: "m", ipa: "/m/" },
  { name: "ნ", latin: "n", ipa: "/n/" },
  { name: "ო", latin: "o", ipa: "/ɔ/" },
  { name: "პ", latin: "p’", ipa: "/p’/" },
  { name: "ჟ", latin: "zh", ipa: "/ʒ/" },
  { name: "რ", latin: "r", ipa: "/r/" },
  { name: "ს", latin: "s", ipa: "/s/" },
  { name: "ტ", latin: "t’", ipa: "/t’/" },
  { name: "უ", latin: "u", ipa: "/u/" },
  { name: "ფ", latin: "p", ipa: "/pʰ/" },
  { name: "ქ", latin: "k", ipa: "/kʰ/" },
  { name: "ღ", latin: "gh", ipa: "/ɣ/" },
  { name: "ყ", latin: "q’", ipa: "/q’/" },
  { name: "შ", latin: "sh", ipa: "/ʃ/" },
  { name: "ჩ", latin: "ch", ipa: "/t͡ʃʰ/" },
  { name: "ც", latin: "ts", ipa: "/t͡sʰ/" },
  { name: "ძ", latin: "dz", ipa: "/d͡z/" },
  { name: "წ", latin: "ts’", ipa: "/t͡s’/" },
  { name: "ჭ", latin: "ch’", ipa: "/t͡ʃ’/" },
  { name: "ხ", latin: "kh", ipa: "/x/" },
  { name: "ჯ", latin: "j", ipa: "/d͡ʒ/" },
  { name: "ჰ", latin: "h", ipa: "/h/" },
];
