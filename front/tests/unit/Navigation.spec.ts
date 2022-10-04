import { mount } from '@vue/test-utils'
import Navigation from '@/components/Navigation/Navigation.vue'

describe('Navigation.vue -> toggleMobileNav', () => {
    let wrapper: any;
    beforeEach(() => {
      wrapper = mount(Navigation, {
        data(){return{ mobileNav: true}},
        stubs: ['router-link']
      });
    });
  it('negates mobileNav', () => {
    wrapper.vm.toggleMobileNav();
    expect(wrapper.vm.mobileNav).toBe(false)
  })
})
