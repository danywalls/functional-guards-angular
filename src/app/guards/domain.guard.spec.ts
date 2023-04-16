import { TestBed } from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import * as domain from "domain";
import {domainGuard} from "./domain.guard";
import {DomainService} from "../domain.service";
import {HttpTestingController} from "@angular/common/http/testing";
import {DomainsGuard} from "../domains.guard";

describe('Domain Guard', () => {

  beforeEach((): void => {
    // const serviceUrlSpy: jasmine.Spy<() => ServiceUrl> = spyOn(
    //   ServiceUrl,
    //   "getInstance"
    // ).and.returnValue({
    //   setUrlData: (url: string): void => {},
    //   get: (keyName: string): any => ({ UrlRead: fakeTfsApiUrl }),
    //   getAll: (): object => null,
    //   urlData: {}
    // });
    //
    const domainServiceSpy =
       jasmine.createSpyObj<DomainService>(["isAvailable"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        domainGuard,
        { provide: DomainService, useValue: domainServiceSpy }
      ]
    });

    const guard = TestBed.runInInjectionContext(domainGuard);
    const httpMock = TestBed.inject(HttpTestingController);
  });
})
