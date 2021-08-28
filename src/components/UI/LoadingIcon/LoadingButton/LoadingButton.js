import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingButton(props) {
  return props.loading ? (
    <button>
      <CircularProgress size="15px" />
    </button>
  ) : (
    <button>{props.label}</button>
  );
}
