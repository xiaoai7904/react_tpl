/**
 * Either 函子
 * 解决命令式编程 if...else写法
 */
import Functor from '@/module/functor/functor';

class Either extends Functor {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  map(f) {
    return this.right ? Either.of(this.left, f(this.right)) : Either.of(f(this.left), this.right);
  }
}

Either.of = function(left, right) {
  return new Either(left, right);
};

export default Either