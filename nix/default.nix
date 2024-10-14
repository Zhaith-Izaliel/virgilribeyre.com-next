{
  buildNpmPackage,
  importNpmLock,
  version,
  name,
}:
buildNpmPackage {
  inherit version;
  pname = name;

  src = ../.;

  # npmDepsHash = "sha256-BkWCjdOErX27VFzkaNPNeLpoE/DC8kG3cx0lrhAmM84=";
  npmDeps = importNpmLock {
    npmRoot = ../.;
  };

  npmConfigHook = importNpmLock.npmConfigHook;

  installPhase = ''
    cp -r dist $out
  '';
}
