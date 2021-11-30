export default function StatusError() {
  return (
    <div className="error-screen absolute-center">
      <div className="icon-error-cloud" />
      <p className="description-small">We cannot get Star Heroes :(</p>
      <p className="description-small">Please check your internet connection</p>
    </div>
  );
}
