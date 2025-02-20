import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "@/mocks/user";
import App from "../page";
import { render } from "@testing-library/react";

describe("newsletter subscription", () => {
  it("should render correctly for user with one subscrtiption", () => {
    const { container } = render(<App user={USER_WITH_ONE_SUBSCRIPTION} />);

    expect(container).toMatchSnapshot();
  });

  it("should render correctly for user without subscrtiptions", () => {
    const { container } = render(<App user={USER_WITHOUT_SUBSCRIPTION} />);

    expect(container).toMatchSnapshot();
  });

  it("should render correctly for user with two subscrtiptions", () => {
    const { container } = render(
      <App user={USER_WITH_MULTIPLE_SUBSCRIPTION} />
    );

    expect(container).toMatchSnapshot();
  });
});
