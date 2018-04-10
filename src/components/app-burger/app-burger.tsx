import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-burger',
  styleUrl: 'app-burger.scss'
})
export class AppBurger {

  @Event() burgerClick: EventEmitter;

  handleBurgerClicked() {
    this.burgerClick.emit();
  }

  render() {
    return (
      <div class="burger" onClick={() => this.handleBurgerClicked() }></div>
    )
  }
}
