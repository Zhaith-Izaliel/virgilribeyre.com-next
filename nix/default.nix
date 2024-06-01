{
  buildNpmPackage,
  version,
  name,
}:
buildNpmPackage {
  inherit version;
  pname = name;

  src = ../.;

  npmDepsHash = "sha256-tD/NT+ShUFxnFRxB2EgMwfFaO4wMp2okmWAQMrGs59Q=";

  installPhase = ''
    cp -r dist $out
  '';
}
