import { TestBed } from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";

import {domainGuard} from "./domain.guard";
import {DomainService} from "../domain.service";

import {routes} from "../routes";
import {lastValueFrom, of} from "rxjs";
import {Router} from "@angular/router";

describe('Domain Guard', () => {

  const mockRouter = jasmine.createSpyObj<Router>(['navigate'])
  mockRouter.navigate.and.returnValue(lastValueFrom(of(true)))

  const setup = (domainServiceMock: unknown) => {
    TestBed.configureTestingModule({
      providers: [
        domainGuard,
        { provide: DomainService, useValue: domainServiceMock},
        { provide: Router, useValue: mockRouter}
      ]
    });

    return TestBed.runInInjectionContext(domainGuard);
  }

  it('should allow to continue', () => {

    const mockDomainService : unknown = {
      isAvailable: () => of(true)
    }
    const guard = setup(mockDomainService);
    guard.subscribe((p: unknown) => {
      expect(p).toBe(true)
    })
  })

  it('should redirect to /no-available path', () => {

    const mockDomainService: unknown = {
      isAvailable: () => of(false)
    }

    const guard = setup(mockDomainService);
    guard.subscribe((p: unknown) => {
      expect(p).toBe(false)
      expect(mockRouter.navigate).toHaveBeenCalled()
    })
  })
})
