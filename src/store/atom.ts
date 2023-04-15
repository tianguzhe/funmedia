import { atom, selector } from 'recoil';
import { getGlobalData, setGlobalData } from '../utils/global-data';

export const textState = atom({
  key: 'textState',
  default: '12',
  effects: [
    ({ onSet, trigger, setSelf }) => {
      if (trigger === 'get') {
        setGlobalData<string>('123', 'xcsi');

        if (getGlobalData<string>('123')) {
          setSelf(getGlobalData<string>('123'));
        } else {
          setSelf('default');
        }
      }

      onSet(newValue => {
        console.log('effects newValue', newValue);
      });
    }
  ]
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  }
});
