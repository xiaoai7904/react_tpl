/**
 * Maybe 函子
 * 解决数据为空(null),防止报错
 */
import Functor from '@/module/functor/functor';

class Maybe extends Functor {
  constructor(x) {
    super();
    this.__value = x;
  }
  map(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
  }
  inspect() {
    let _inspect = function(x) {
      return x && x.inspect ? x.inspect() : x;
    };
    return 'Maybe(' + _inspect(this.__value) + ')';
  }
}
Maybe.of = function(x) {
  return new Maybe(x);
};
export default Maybe;
