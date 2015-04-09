import copyright from './index';
import { equal, notEqual } from 'assert';

it('should fix typewriter’s copyright', ()=> {
  equal(copyright(`(c)`), `©`);
});

it('should stick copyright to the sibling year', ()=> {
  equal(copyright(`(c) 2013 MegaCorp`), `© 2013 MegaCorp`);
});
