import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingButton(props) {
  return props.loading ? (
    <button className="button__profile">
      <CircularProgress size="15px" />
    </button>
  ) : (
    <button className="button__profile">{props.label}</button>
  );
}
