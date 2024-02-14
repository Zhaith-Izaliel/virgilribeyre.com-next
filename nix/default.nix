{buildNpmPackage}:
buildNpmPackage {
  pname = "virgilribeyre.com";
  version = "1.3.0";

  src = ../.;

  npmDepsHash = "sha256-tD/NT+ShUFxnFRxB2EgMwfFaO4wMp2okmWAQMrGs59Q=";

  installPhase = ''
    cp -r dist $out
  '';
}
